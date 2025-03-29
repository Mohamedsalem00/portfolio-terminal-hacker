import { useEffect, useRef } from 'react'
import { Terminal as XTerm } from 'xterm'
import 'xterm/css/xterm.css'
import { commands } from '../utils/commands'

const Terminal = () => {
  const terminalRef = useRef(null)

  useEffect(() => {
    const terminal = new XTerm()
    terminal.open(terminalRef.current)
    terminal.write('Welcome to the Hacker Terminal Portfolio!\r\n')
    terminal.write('Type `help` to see available commands.\r\n')

    terminal.onKey(({ key, domEvent }) => {
      if (domEvent.keyCode === 13) {
        const input = terminalRef.current.value
        handleCommand(input, terminal)
        terminalRef.current.value = ''
      }
    })

    return () => {
      terminal.dispose()
    }
  }, [])

  const handleCommand = (input, terminal) => {
    const command = input.trim().split(' ')[0]
    if (commands[command]) {
      commands[command](input, terminal)
    } else {
      terminal.write(`Unknown command: ${input}\r\n`)
    }
  }

  return <div ref={terminalRef} style={{ height: '100vh', width: '100%' }}></div>
}

export default Terminal