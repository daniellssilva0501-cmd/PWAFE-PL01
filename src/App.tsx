function saudacao(hora: number): string {
  if (hora < 12) {
    return "Bom dia";
  } else if (hora < 20) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

type Aluno = {
  nome: string;
  curso: string;
  ano: number;
  interesses: string[];
};

function App() {
  // const nome = 'Daniel Souza'
  // const curso = 'Desenvolvimento de Software'
  // const ano = 2

  const aluno: Aluno = {
    nome: "Daniel Souza",
    curso: "Desenvolvimento de Software",
    ano: 2,
    interesses: ["Programação", "Jogos", "Música"],
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

      <section className="mx-auto mb-8 max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-4">
          <span className="text-sm font-medium uppercase tracking-wide text-sky-600">
            Perfil do aluno
          </span>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            {mensagemSaudacao}, {aluno.nome}
          </h1>
        </div>

        <div className="space-y-2 text-slate-600">
          <p className="text-lg">
            <span className="font-semibold text-slate-800">Curso:</span>{" "}
            {aluno.curso}
          </p>

          <p className="text-base">
            <span className="font-semibold text-slate-800">Ano:</span>{" "}
            {aluno.ano}º ano
          </p>
        </div>
        

        <div className="mt-5 border-t border-slate-200 pt-4">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            Interesses
          </p>

          <div className="flex flex-wrap gap-2">
            {aluno.interesses?.map((interesse) => (
              <span
                key={interesse}
                className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700"
              >
                {interesse}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
