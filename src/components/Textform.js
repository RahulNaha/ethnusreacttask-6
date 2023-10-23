import React ,{useState}from 'react'

export default function Textform(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
  };

  return (
    <div style={theme}>
      <header>
        <h1>A passionate technologist with expertise in JavaScript, C++, Java, and Data Structures & Algorithms (DSA).</h1>
        
      </header>
      <section>
        <h2>Skills</h2>
        <p>My proficiency in JavaScript empowers me to create dynamic and interactive web applications. I also excel in C++ and Java for building robust software solutions. I enjoy solving complex problems and optimizing code for efficiency.</p>
      </section>
      <section>
        <h2>Data Structures & Algorithms</h2>
        <p>I have a keen interest in DSA, which is the backbone of software engineering. I constantly explore ways to apply these principles to real-world challenges, enabling me to design efficient algorithms and data structures.</p>
      </section>
      <section>
        <h2>Web Development</h2>
        <p>My experience in web development has honed my skills in creating user-friendly and visually appealing websites. I love working with the latest web technologies to bring ideas to life on the web.</p>
      </section>
      <section>
        <h2>Education</h2>
        <p>I am currently pursing a Bacherlor of Technology  with a focus on Computer Engineering from Vellore Institute of Technology, Vellore. My academic journey laid the foundation for my technical expertise and ignited my passion for innovation.</p>
      </section>
      <section>
        <h2>Social Media Links</h2>
        <a href="www.linkedin.com/in/rahul-naha-051aa5224">LinkedIn</a><br></br>
        <a href="https://www.instagram.com/rahul_n009">Instagram</a>
      </section>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  )
  
}
