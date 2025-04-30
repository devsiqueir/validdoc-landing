
import React from "react";
import { Github, ShieldCheck, FileText, Mail } from "lucide-react";

const Button = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl inline-block"
  >
    {children}
  </a>
);

export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ValidDoc API</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Valide CPF e CNPJ via API segura com JWT
        </p>
        <Button href="https://rapidapi.com/devsiqueir/api/validdoc">
          Testar na RapidAPI
        </Button>
      </section>
      <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
        <div className="p-6 bg-gray-900 rounded-xl text-center">
          <ShieldCheck className="w-10 h-10 mb-3 text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">JWT Seguro</h3>
          <p className="text-gray-400 text-sm">
            Suas requisições são protegidas com autenticação JWT.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl text-center">
          <FileText className="w-10 h-10 mb-3 text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Validação de CPF/CNPJ</h3>
          <p className="text-gray-400 text-sm">
            Verifique dados fiscais com precisão e rapidez.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl text-center">
          <Github className="w-10 h-10 mb-3 text-white mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Open Source</h3>
          <p className="text-gray-400 text-sm">
            Acesse o código fonte e contribua com melhorias.
          </p>
        </div>
      </section>
      <section className="text-center mb-20">
        <h2 className="text-2xl font-bold mb-4">Preços</h2>
        <p className="text-gray-400">Gratuito para uso inicial. Planos futuros em breve.</p>
      </section>
      <footer className="text-center border-t border-gray-800 pt-6">
        <p className="text-gray-400 mb-2">Entre em contato:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/devsiqueir/doc-validator"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="mailto:ricardosiqueira.dev@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Mail className="w-5 h-5" /> Email
          </a>
        </div>
      </footer>
    </main>
  );
}
