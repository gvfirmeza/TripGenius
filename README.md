# Trip Genius

## Nosso App:

Nosso aplicativo revoluciona a forma como você planeja suas viagens. Combinando tecnologia avançada e inteligência artificial, oferecemos roteiros personalizados que transformam suas preferências em experiências únicas.

## **Requisitos Funcionais:**

1. **Formulário de Viagens:**
    - Permitir que os usuários preencham informações sobre sua viagem, como destino desejado, datas de partida e retorno, preferências de atividades, orçamento estimado, entre outros detalhes relevantes.
2. **Integração com a API do GPT:**
    - Conectar o aplicativo à API do GPT para processar as informações do formulário e gerar um roteiro de viagem personalizado.
3. **Exibição do Roteiro:**
    - Mostrar ao usuário o roteiro de viagem gerado pela API, incluindo detalhes como pontos turísticos a visitar, atividades sugeridas, opções de hospedagem e transporte, estimativa de custos, etc.
4. **Personalização do Roteiro:**
    - Permitir que o usuário personalize o roteiro gerado, adicionando ou removendo atividades, ajustando datas e horários, selecionando opções de hospedagem e transporte, conforme sua preferência.
5. **Cadastro e Login de Usuários:**
    - Implementar um sistema de cadastro e login para que os usuários possam salvar seus roteiros, visualizar histórico de viagens, e receber recomendações personalizadas com base em suas preferências anteriores.

## **Requisitos Não Funcionais:**

1. **Usabilidade e Interface Amigável:**
    - Garantir que o aplicativo tenha uma interface intuitiva e amigável para facilitar a navegação e o preenchimento do formulário de viagens.
2. **Desempenho e Velocidade:**
    - Assegurar que o aplicativo seja responsivo e rápido, tanto no carregamento das páginas quanto na geração e exibição dos roteiros de viagem.
3. **Segurança dos Dados:**
    - Implementar medidas de segurança para proteger os dados dos usuários.
4. **Compatibilidade e Responsividade:**
    - Garantir que o aplicativo seja compatível com diferentes dispositivos e navegadores, proporcionando uma experiência consistente e responsiva em desktops, tablets e smartphones.
5. **Escalabilidade e Manutenibilidade:**
    - Projetar o aplicativo de forma escalável para lidar com um aumento no número de usuários e viagens cadastradas, além de garantir uma fácil manutenção e atualização do sistema no futuro.

## **Casos de Uso:**

### **Caso de Uso 1: Preenchimento do Formulário de Viagens**

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a página de preenchimento do formulário de viagens.
2. O sistema exibe um formulário solicitando detalhes da viagem (destino, datas, preferências, orçamento, etc.).
3. O usuário preenche todas as informações solicitadas.
4. O usuário envia o formulário.
5. O sistema confirma o recebimento das informações e inicia o processamento com a API do GPT.

**Fluxos Alternativos:**

- O usuário pode optar por salvar o formulário parcialmente preenchido e completá-lo posteriormente.

**Pós-condições:**

- O sistema armazena as informações do formulário e se prepara para gerar o roteiro de viagem.

### **Caso de Uso 2: Geração do Roteiro de Viagem**

**Ator Principal:** Sistema

**Pré-condições:**

- O formulário de viagem foi preenchido e enviado pelo usuário.

**Fluxo Principal:**

1. O sistema envia as informações do formulário para a API do GPT.
2. A API do GPT processa as informações e gera um roteiro de viagem personalizado.
3. O sistema recebe o roteiro gerado pela API.
4. O sistema salva o roteiro no perfil do usuário.

**Pós-condições:**

- O sistema armazena o roteiro gerado e se prepara para exibi-lo ao usuário.

### **Caso de Uso 3: Exibição do Roteiro de Viagem**

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário enviou um formulário de viagem e o sistema gerou um roteiro.

**Fluxo Principal:**

1. O usuário acessa a página de visualização do roteiro.
2. O sistema exibe o roteiro de viagem, incluindo pontos turísticos, atividades, hospedagem, transporte e estimativas de custos.
3. O usuário revisa o roteiro.

**Pós-condições:**

- O usuário visualiza o roteiro e pode optar por personalizá-lo ou salvá-lo.

### **Caso de Uso 4: Personalização do Roteiro**

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário visualizou o roteiro gerado pelo sistema.

**Fluxo Principal:**

1. O usuário seleciona a opção de personalizar o roteiro.
2. O sistema permite que o usuário adicione ou remova atividades, ajuste datas e horários, e selecione opções de hospedagem e transporte.
3. O usuário faz as alterações desejadas.
4. O usuário salva as alterações.
5. O sistema atualiza o roteiro com as personalizações do usuário.

**Pós-condições:**

- O roteiro de viagem é personalizado conforme as preferências do usuário.

### **Caso de Uso 5: Cadastro e Login de Usuários**

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário deseja acessar funcionalidades que requerem autenticação.

**Fluxo Principal:**

1. O usuário acessa a página de cadastro/login.
2. O usuário preenche as informações de cadastro (nome, email, senha, etc.) ou suas credenciais de login.
3. O sistema valida as informações e autentica o usuário.
4. O usuário é redirecionado para a página principal do aplicativo.

**Pós-condições:**

- O usuário está autenticado e pode acessar funcionalidades personalizadas e salvar seus roteiros.

[flask](https://www.notion.so/flask-cfee4983296045e78a797cc79e0b1f21?pvs=21)
