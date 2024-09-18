import { useState } from "react";
import {
  Terminal,
  FileText,
  Zap,
  Github,
  Code,
  Cloud,
  Twitter,
  Linkedin,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  const [activeCommand, setActiveCommand] = useState("init");

  const commands = {
    init: {
      description: "Initialize a new Lumen Docs project",
      usage: "npx lumen-docs init",
      explanation:
        "This command sets up a new Lumen Docs project in your current directory. It creates necessary configuration files and folder structure for your API documentation.",
    },
    generate: {
      description: "Generate API documentation",
      usage: "npx lumen-docs generate",
      explanation:
        "This command reads your OpenAPI specification and uses AI to generate comprehensive, readable Markdown documentation. The generated docs will be placed in the lumen-gen directory.",
    },
    deploy: {
      description: "Deploy your documentation",
      usage: "npx lumen-docs deploy",
      explanation:
        "If you opted for GitBook deployment, this command pushes the generated documentation to your GitBook space.",
    },
  };

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 flex flex-col">
      <header className="bg-amber-200 p-5 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-2 text-amber-800" />
            <h1 className="text-2xl font-bold text-amber-900 tracking-tight">Lumen Docs</h1>
          </div>
          <nav>
            <a
              href="https://github.com/emmanuel39hanks/lumen-docs"
              className="text-amber-900 hover:text-amber-700 transition-colors flex items-center border border-amber-800 rounded-full px-4 py-2 hover:bg-amber-100"
              target="_blank"
            >
              <Github className="mr-2" /> GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center py-12 bg-gradient-to-b from-amber-200 to-amber-50 rounded-3xl">
          <h2 className="text-5xl font-extrabold mb-6 text-amber-900 leading-tight">
            Illuminate Your API Documentation
          </h2>
          <p className="text-2xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Generate, manage, and deploy beautiful API docs from OpenAPI specs
            using AI magic!
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 mb-12 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-amber-900">
            <Terminal className="mr-2" /> Lumen Docs CLI
          </h3>
          <div className="bg-amber-100 p-4 rounded-md font-mono mb-4">
            <code className="text-amber-900">
              {commands[activeCommand as keyof typeof commands].usage}
            </code>
          </div>
          <p className="text-amber-800 mb-4">
            {commands[activeCommand as keyof typeof commands].explanation}
          </p>
          <div className="flex space-x-4">
            {Object.keys(commands).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCommand(key)}
                className={`px-4 py-2 rounded ${
                  activeCommand === key
                    ? "bg-amber-600 text-white"
                    : "bg-amber-200 text-amber-900 hover:bg-amber-300"
                } transition-colors`}
              >
                {key}
              </button>
            ))}
          </div>
        </section>

        {/* <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-amber-900">
            See Lumen Docs in Action
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/example"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </section> */}

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Code className="h-12 w-12 mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2 text-amber-900">
              Initialize
            </h3>
            <p className="text-amber-800">
              Start your documentation journey with <span className="bg-amber-200 px-1 rounded">npx lumen-docs init</span>. Set
              up your project in seconds.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <FileText className="h-12 w-12 mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2 text-amber-900">Generate</h3>
            <p className="text-amber-800">
              Convert your OpenAPI specs into readable Markdown docs with <span className="bg-amber-200 px-1 rounded">npx lumen-docs generate</span>.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Cloud className="h-12 w-12 mb-4 text-amber-700" />
            <h3 className="text-xl font-bold mb-2 text-amber-900">Deploy</h3>
            <p className="text-amber-800">
              Share your docs using <span className="bg-amber-200 px-1 rounded">npx lumen-docs deploy</span>. One
              command, instant publication.
            </p>
          </div>
        </section>

        <section className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-amber-900">
            Powered by AI Magic
          </h3>
          <p className="text-xl text-amber-800 mb-8">
            Lumen Docs leverages OpenAI's GPT model to generate intelligent and
            context-aware documentation.
          </p>
          <Zap className="h-16 w-16 mx-auto text-amber-600" />
        </section>

        <section className="flex justify-center mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center space-y-4 max-w-sm">
            <Image
              src="https://github.com/emmanuel39hanks.png"
              alt="Emmanuel Haankwenda"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full border-4 border-amber-400"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-amber-900">
                Emmanuel Haankwenda
              </h3>
              <p className="text-amber-800 mb-4">Creator of Lumen Docs</p>
              <div className="flex justify-center space-x-4">
                {[
                  { href: "https://github.com/emmanuel39hanks", icon: Github },
                  {
                    href: "https://twitter.com/emmanuel_haanks",
                    icon: Twitter,
                  },
                  {
                    href: "https://www.linkedin.com/in/emmanuel-haankwenda",
                    icon: Linkedin,
                  },
                ].map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-amber-900 hover:text-amber-700 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amber-200 p-6 mt-12">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-amber-900">
            &copy; 2024 Lumen Docs by Emmanuel Haankwenda
          </p>
          <a
            href="https://github.com/emmanuel39hanks/lumen-docs"
            className="flex items-center text-amber-900 hover:text-amber-700 transition-colors border border-amber-800 rounded-full px-4 py-2 hover:bg-amber-300"
            target="_blank"
          >
            <Github className="mr-2" /> View on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
