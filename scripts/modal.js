// === 2. LÓGICA DO MODAL ===
    window.projectsData = {
        project1: {
            title: 'Voga Stock',
            tech: ['C', 'Lógica de Programação', 'Structs', 'Arrays e Strings'],
            description: 'Sistema de gerenciamento de estoque desenvolvido em linguagem C como projeto final do SENAI. Foram aplicados conceitos fundamentais de programação, como structs para representação dos produtos, funções para organização e reutilização do código, além de lógica de programação para validação de dados, controle de fluxo e operações de cadastro, edição, listagem e remoção de itens do estoque.',
            features: [
                'Cadastro, edição e exclusão de produtos',
                'Controle de entrada e saída de estoque',
                'Relatórios de produtos em baixa quantidade',
                'Sistema de busca e filtros',
                'Persistência de dados em arquivos'
            ],
            github: 'https://github.com/Mateus-denv/Projeto.loja.c'
        },
        project2: {
            title: 'TaskSpring',
            tech: ['Java', 'Spring Boot', 'REST API', 'MySQL','Maven','H2','Lombok'],
            description: 'Projeto iniciado durante um curso da Rocketseat, focado no desenvolvimento de uma aplicação back-end em Java utilizando Maven e Spring Boot. A aplicação foi construída seguindo o padrão de API REST, com uso de Lombok para redução de boilerplate, integração com o banco de dados H2 e implementação de endpoints completos para operações CRUD de usuários e tarefas. O projeto inclui tratamento de exceções, segurança dos dados do usuário e práticas voltadas à organização, escalabilidade e manutenibilidade do código.',
            features: [
                'API REST',
                'Autenticação e autorização com Spring Security',
                'Gerenciamento de tarefas por usuário',
                'Validações',
                'Testes unitários e de integração',
                'Segurança de dados'
            ],
            github: 'https://github.com/seuusuario/taskspring'
        }
    };

    window.openModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('project-details-content');
        const project = window.projectsData[projectId];
        
        if (!project || !modal || !modalBody) {
            console.error("Erro: Projeto ou elementos do modal não encontrados.");
            return;
        }
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <div class="modal-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
            
            <p class="modal-description">${project.description}</p>
            
            <div class="modal-features">
                <h3>Funcionalidades:</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-buttons">
                <a href="${project.github}" target="_blank" class="btn-github">
                    Ver no GitHub
                </a>
            </div>
        `;
        
        // Usando classe para controlar display flex
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; 
    }

    window.closeModal = function() {
        const modal = document.getElementById('projectModal');
        if(modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; 
        }
    }

    // Fechar modal ao clicar fora ou ESC
    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target == modal) window.closeModal();
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') window.closeModal();
    });