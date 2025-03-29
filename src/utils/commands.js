export const commands = {
  help: (input, terminal) => {
    terminal.write('Available commands:\r\n')
    terminal.write('  whoami - Display personal info\r\n')
    terminal.write('  ls - List sections (projects, certs, contact)\r\n')
    terminal.write('  cat project [name] - Display project details\r\n')
    terminal.write('  contact - Display contact info\r\n')
    terminal.write('  matrix - Start Matrix Rain effect\r\n')
    terminal.write('  hack - Simulate hacking\r\n')
    terminal.write('  ascii [text] - Generate ASCII Art\r\n')
    terminal.write('  clear - Clear the terminal\r\n')
    terminal.write('  cv - Display CV\r\n')
  },
  whoami: (input, terminal) => {
    terminal.write('Name: Mohamed Salem Khyarhoum\r\n')
    terminal.write('Bio: Étudiant en ingénierie en sécurité des systèmes informatiques et réseaux, passionné par la cybersécurité et le développement technologique.\r\n')
  },
  ls: (input, terminal) => {
    terminal.write('Sections available:\r\n')
    terminal.write('  projects - List of projects\r\n')
    terminal.write('  certs - List of certifications\r\n')
    terminal.write('  contact - Contact information\r\n')
  },
  cat: (input, terminal) => {
    const args = input.split(' ')
    const projectName = args[2]
    const projects = {
      'Gestion de Scolarité': {
        technologies: ['Laravel', 'MySQL'],
        details: [
          "Développement d'une plateforme de gestion des inscriptions et des notes scolaires.",
          "Interface utilisateur ergonomique pour les enseignants et les étudiants."
        ]
      },
      'ProfsChezVous': {
        technologies: ['Flutter', 'Django'],
        details: [
          "Plateforme mettant en relation professeurs et élèves pour des cours particuliers.",
          "Intégration d'un système de paiement sécurisé et gestion des réservations."
        ]
      }
    }
    if (projects[projectName]) {
      terminal.write(`Project: ${projectName}\r\n`)
      terminal.write(`Technologies: ${projects[projectName].technologies.join(', ')}\r\n`)
      projects[projectName].details.forEach(detail => {
        terminal.write(`- ${detail}\r\n`)
      })
    } else {
      terminal.write(`Project ${projectName} not found.\r\n`)
    }
  },
  contact: (input, terminal) => {
    terminal.write('Contact Information:\r\n')
    terminal.write('  Email: mohamedsalemkhyarhoum@gmail.com\r\n')
    terminal.write('  LinkedIn: https://www.linkedin.com/in/mohamed-salem-kh\r\n')
    terminal.write('  Phone: +216 53595258\r\n')
    terminal.write('  Location: Tunis, Tunisie\r\n')
  },
  cv: (input, terminal) => {
    const userData = {
      name: "Mohamed Salem Khyarhoum",
      contact: {
        email: "mohamedsalemkhyarhoum@gmail.com",
        linkedin: "https://www.linkedin.com/in/mohamed-salem-kh",
        phone: "+216 53595258",
        location: "Tunis, Tunisie"
      },
      objective: "Étudiant en ingénierie en sécurité des systèmes informatiques et réseaux, passionné par la cybersécurité et le développement technologique.",
      skills: {
        systemes_exploitation: ["Linux (Ubuntu, Kali Linux)"],
        developpement_mobile: ["Flutter"],
        developpement_web: ["Laravel", "Django"],
        bases_donnees: ["MySQL", "Oracle Database", "PostgreSQL"],
        sgbd_administration: ["Gestion et optimisation des bases de données"],
        programmation: ["C", "Python", "PHP"],
        gestion_version: ["Git", "GitHub"]
      },
      experiences_professionnelles: [
        {
          entreprise: "Syskat Technologie",
          poste: "Stagiaire",
          periode: "Avril 2024 - Juin 2024",
          lieu: "Tevragh Zeina, Nouakchott Nord, Mauritanie",
          missions: [
            "Développement de l’application ProfsChezVous avec Flutter (frontend) et Django (backend).",
            "Implémentation de solutions de paiement en ligne et intégration d'APIs REST.",
            "Sécurisation des données et gestion de l’authentification des utilisateurs."
          ]
        },
        {
          entreprise: "Syskat Technologie",
          poste: "Stagiaire",
          periode: "Juillet 2023 - Août 2023",
          lieu: "Tevragh Zeina, Nouakchott Nord, Mauritanie",
          missions: [
            "Développement d'une application web de gestion de scolarité avec Laravel.",
            "Optimisation des processus administratifs scolaires via une interface intuitive.",
            "Conception et gestion de bases de données MySQL."
          ]
        }
      ],
      projets_academiques: [
        {
          nom: "Gestion de Scolarité",
          technologies: ["Laravel", "MySQL"],
          details: [
            "Développement d'une plateforme de gestion des inscriptions et des notes scolaires.",
            "Interface utilisateur ergonomique pour les enseignants et les étudiants."
          ]
        },
        {
          nom: "ProfsChezVous",
          technologies: ["Flutter", "Django"],
          details: [
            "Plateforme mettant en relation professeurs et élèves pour des cours particuliers.",
            "Intégration d'un système de paiement sécurisé et gestion des réservations."
          ]
        }
      ],
      formation: [
        {
          etablissement: "iTeam University",
          diplome: "Ingénieur en Sécurité des Systèmes Informatiques et Réseaux",
          periode: "Septembre 2024 - Septembre 2027"
        },
        {
          etablissement: "ISCAE",
          diplome: "Licence en Développement Informatique",
          periode: "Janvier 2021 - Juillet 2024"
        }
      ],
      certifications: [
        {
          nom: "Oracle SQL",
          organisme: "Great Learning",
          date: "Novembre 2024"
        },
        {
          nom: "Introduction to Oracle SQL",
          organisme: "DataCamp",
          date: "Octobre 2024"
        }
      ]
    }

    terminal.write(`Name: ${userData.name}\r\n`)
    terminal.write(`Objective: ${userData.objective}\r\n`)
    terminal.write('Skills:\r\n')
    Object.entries(userData.skills).forEach(([key, value]) => {
      terminal.write(`  ${key}: ${value.join(', ')}\r\n`)
    })
    terminal.write('Professional Experiences:\r\n')
    userData.experiences_professionnelles.forEach(exp => {
      terminal.write(`  Company: ${exp.entreprise}\r\n`)
      terminal.write(`  Position: ${exp.poste}\r\n`)
      terminal.write(`  Period: ${exp.periode}\r\n`)
      terminal.write(`  Location: ${exp.lieu}\r\n`)
      exp.missions.forEach(mission => {
        terminal.write(`    - ${mission}\r\n`)
      })
    })
    terminal.write('Academic Projects:\r\n')
    userData.projets_academiques.forEach(project => {
      terminal.write(`  Project: ${project.nom}\r\n`)
      terminal.write(`  Technologies: ${project.technologies.join(', ')}\r\n`)
      project.details.forEach(detail => {
        terminal.write(`    - ${detail}\r\n`)
      })
    })
    terminal.write('Education:\r\n')
    userData.formation.forEach(edu => {
      terminal.write(`  Institution: ${edu.etablissement}\r\n`)
      terminal.write(`  Degree: ${edu.diplome}\r\n`)
      terminal.write(`  Period: ${edu.periode}\r\n`)
    })
    terminal.write('Certifications:\r\n')
    userData.certifications.forEach(cert => {
      terminal.write(`  Certification: ${cert.nom}\r\n`)
      terminal.write(`  Organization: ${cert.organisme}\r\n`)
      terminal.write(`  Date: ${cert.date}\r\n`)
    })
  },
  matrix: (input, terminal) => {
    terminal.write('Starting Matrix Rain effect...\r\n')
    // Add Matrix Rain effect code here...
  },
  hack: (input, terminal) => {
    terminal.write('Simulating hacking...\r\n')
    // Add hacking simulation code here...
  },
  ascii: (input, terminal) => {
    const text = input.split(' ')[1]
    terminal.write(`Generating ASCII Art for: ${text}\r\n`)
    // Add ASCII Art generation code here...
  },
  clear: (input, terminal) => {
    terminal.clear()
  }
}