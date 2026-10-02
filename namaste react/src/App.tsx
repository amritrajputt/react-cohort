import reactLogo from './assets/react.svg'
import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={reactLogo} className="logo react" alt="react logo" />
      </div>

      <nav className="nav-items" aria-label="Main navigation">
        <ul>
          <li><a href="https://namaste.dev">Namaste</a></li>
          <li><a href="https://namaste.dev/docs">Docs</a></li>
        </ul>
      </nav>
    </header>
  )
}
const cardData = [
  {
    id:1,
    title: 'Namaste',
    description: 'Namaste is a free and open-source React component library that helps you build beautiful and accessible web applications.',
    url: 'https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA'
  },
  {
    id:2,
    title: 'Accessibility',
    description: 'Namaste is designed to be accessible and inclusive, with features like keyboard navigation, screen reader support, and high contrast themes.',
    url: 'https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA' 
  },
  {
    id:3,
    title: 'Performance',
    description: 'Namaste is built with performance in mind, with optimized bundle sizes and fast load times.',
    url: 'https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA'
  },
  {
    id:4,
    title: 'Customization',
    description: 'Namaste is highly customizable, allowing you to tailor the components to your specific needs.',
    url: 'https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA'
    }
  ]
function Body() {
  return (
    <div className="body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {
        cardData.map((data) => (
          <Card key={data.id} title={data.title} url={data.url} description={data.description} />
        ))
      }
    </div>
  )
}


function Card({ title, description, url }: { title: string, description: string, url: string }) {
  return (
    <div className="card">

      <div className="card-image">
        <h3>{title}</h3>
        <img src={url} style={{ width: '20%' }} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer"></footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
