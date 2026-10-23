# PL01 · Respostas

Daniel Souza · Desenvolvimento de Software · Programação Web Avançada para Front-End

## Exercício 3 · Corrigir JSX partido

| # | Erro encontrado | Correcção |
|---|-----------------|-----------|
| 1 | O `return` devolve três elementos soltos (`<h1>`, `<img>`, `<p>`). O JSX só pode devolver um elemento pai. O build dava `TS2657: JSX expressions must have one parent element`. | Envolver tudo num pai: um fragmento `<>...</>` ou um `<main>`. |
| 2 | `<img ...>` não está fechada. Em JSX todas as tags têm de ser fechadas. O build dava `TS17008: JSX element 'img' has no corresponding closing tag`. | Auto-fechar: `<img src="/favicon.svg" alt="Logo" />`. |
| 3 | `class="titulo"`: em JSX, `class` é uma palavra reservada do JavaScript. Só apareceu depois de corrigir os anteriores. | Usar `className="titulo"`. |
| 4 | `Olá, nome!` mostra o texto literal "nome" e não o valor da variável. Não dá erro de build, só se nota no navegador. | Usar chavetas: `Olá, {nome}!`. |

Código corrigido:

```tsx
export default function App() {
  const nome = 'Rita';
  return (
    <>
      <h1 className="titulo">Olá, {nome}!</h1>
      <img src="/favicon.svg" alt="Logo" />
      <p>Bem-vinda ao PWAFE</p>
    </>
  );
}
```

## Exercício 6 · Caça aos erros de tipo

Previsão: 3 erros. O `npm run build` encontrou 3.

| Linha | Código do erro | O que significa, por palavras minhas | Correcção |
|-------|----------------|--------------------------------------|-----------|
| 9 | TS2322 | `preco` foi declarado como `number` no tipo `Produto`, mas recebeu o texto `'49.90'`. | `preco: 49.90` (sem aspas). |
| 10 | TS2322 | `emStock` é `boolean`, mas recebeu a string `'sim'`. | `emStock: true`. |
| 18 | TS2345 | `precoComIva` espera um `number` e foi chamada com `produto.nome`, que é uma `string`. | `precoComIva(produto.preco)`. |

Preço com duas casas decimais (`toFixed` devolve uma string já formatada):

```tsx
return <p>{produto.nome}: {precoComIva(produto.preco).toFixed(2)} €</p>;
// Teclado: 61.38 €
```

**Porque é que o `npm run dev` continuava a mostrar a página?** O Vite, em desenvolvimento, só apaga os tipos e converte o TypeScript em JavaScript, sem os verificar. A verificação de tipos só acontece no `tsc -b`, que corre dentro do `npm run build`. Além disso, o `Loja.tsx` nem estava importado na página.

## Extra · Quarto interesse

Com `[0]`, `[1]` e `[2]` escritos à mão, um quarto interesse no objecto não aparece no cartão, porque ninguém mostra o `[3]`. Se houvesse só dois interesses, ficava uma etiqueta vazia. O número de etiquetas tem de acompanhar o tamanho do array, e é isso que o `map` resolve na T02.

## Histórico Git (`git log --oneline`)

```
4c2168c PL01: respostas, AI_USAGE e capturas
8533d77 PL01: arrumar restos do modelo e interesses por índice
1f0eb11 PL01: cartão responsivo
e85cafd PL01: cartão de perfil
6430545 PL01: dados num objecto tipado Perfil
11b47af PL01: remover restos do modelo do Vite
36679dc PL01: projecto base com Tailwind CSS v4
```

Nota: os exercícios 1 e 2 ficaram juntos no primeiro commit. Os exercícios 3 e 6 eram código temporário (o `Loja.tsx` era para apagar no fim), por isso não têm commit próprio. O commit "PL01: JSX e TypeScript" corresponde ao `6430545`.

## Capturas de ecrã

- [capturas/computador.png](capturas/computador.png) (1280 px)
- [capturas/telemovel-375px.png](capturas/telemovel-375px.png) (375 px)
