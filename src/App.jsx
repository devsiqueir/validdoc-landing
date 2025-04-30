// src/app/page.tsx ou App.jsx
import React, { useEffect } from "react";
import { Github, ShieldCheck, FileText, Mail } from "lucide-react";

const Button = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl inline-block font-semibold transition-all"
  >
    {children}
  </a>
);

export default function App() {
  useEffect(() => {
    document.title = "ValidDoc API – Validação de CPF e CNPJ";
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ValidDoc API
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
          ⚡ API de validação fiscal de CPF e CNPJ com segurança JWT e respostas estruturadas.
        </p>
        <Button href="https://rapidapi.com/ricardosiqueira530/api/validdoc-api">
          Testar na RapidAPI
        </Button>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
        {[{
          icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
          title: "JWT Seguro",
          desc: "Suas requisições são protegidas com autenticação JWT."
        }, {
          icon: <FileText className="w-10 h-10 text-blue-400" />,
          title: "Validação de CPF/CNPJ",
          desc: "Verifique dados fiscais com precisão e rapidez."
        }, {
          icon: <Github className="w-10 h-10 text-white" />,
          title: "Open Source",
          desc: "Acesse o código fonte e contribua com melhorias."
        }].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900 rounded-xl text-center hover:shadow-lg hover:bg-gray-800 transition-all"
          >
            <div className="mb-3 mx-auto">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="text-center mb-20">
        <h2 className="text-2xl font-bold mb-4">Preços</h2>
        <p className="text-gray-400">Gratuito para uso inicial. Planos futuros em breve.</p>
      </section>

      {/* Footer */}
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
            href="mailto:siqueiradev@outlook.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <Mail className="w-5 h-5" /> Email
          </a>
        </div>
      </footer>
    </main>
  );
}
