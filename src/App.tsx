function saudacao(hora: number): string {
  if (hora < 12) {
    return "Bom dia";
  } else if (hora < 20) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

type Perfil = {
  nome: string;
  curso: string;
  ano: number;
  cidade: string;
  interesses: string[];
  procuraEstagio: boolean;
};

function App() {
  const perfil: Perfil = {
    nome: "Daniel Souza",
    curso: "Desenvolvimento de Software",
    ano: 2,
    cidade: "Porto",
    interesses: ["Programação", "Jogos", "Música"],
    procuraEstagio: true,
  };

  const horaAtual = new Date().getHours();
  const mensagemSaudacao = saudacao(horaAtual);

  return (
    // min h-screen bg-slate-100 p-8 é um conjunto de classes do Tailwind CSS que define o estilo do elemento <main>:
    // min-h-screen: Define a altura mínima do elemento como a altura total da tela (viewport). Isso garante que o elemento ocupe pelo menos toda a altura da janela do navegador.
    // bg-slate-100: Define a cor de fundo do elemento como um tom claro de cinza (slate) com intensidade 100. O Tailwind CSS fornece uma paleta de cores predefinida, e "slate-100" é uma dessas cores.
    // p-8: Define o preenchimento (padding) interno do elemento em todas as direções (topo, direita, inferior e esquerda) como 2rem (32px). O valor "8" corresponde a uma escala de espaçamento definida pelo Tailwind CSS.

    <main className="min-h-screen bg-slate-100 p-8">
      {/* Informações do aluno */}
      {/* mb-8 é uma classe do Tailwind CSS que define a margem inferior (margin-bottom) de um elemento. O valor "8" corresponde a uma escala de espaçamento definida pelo Tailwind CSS, que geralmente é baseada em múltiplos de 0,25rem (4px). Portanto, mb-8 significa que o elemento terá uma margem inferior de 2rem (32px). */}

      {/* Telemóvel: empilhado e centrado. A partir de md (768px): círculo à esquerda, texto à direita */}
      <section className="mx-auto mb-8 max-w-md rounded-2xl bg-white p-6 text-center shadow-lg md:flex md:max-w-2xl md:items-center md:gap-8 md:p-8 md:text-left">
        {/* Círculo com a inicial do nome */}
        <div className="mx-auto mb-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-sky-600 text-4xl font-bold text-white md:mx-0 md:mb-0">
          {perfil.nome[0]}
        </div>

        <div className="md:flex-1">
          <div className="mb-4">
            <span className="text-sm font-medium uppercase tracking-wide text-sky-600">
              Perfil do aluno
            </span>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              {mensagemSaudacao}, {perfil.nome}
            </h1>

            {/* Linha secundária com cor mais suave */}
            <p className="mt-1 text-slate-500">
              {perfil.curso} · {perfil.ano}º ano · {perfil.cidade}
            </p>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Interesses
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {/* Por agora, um índice de cada vez. Na T02 passa a ser feito com map */}
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                {perfil.interesses[0]}
              </span>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                {perfil.interesses[1]}
              </span>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                {perfil.interesses[2]}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
