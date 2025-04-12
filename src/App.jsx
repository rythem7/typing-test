import './App.css'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import NavBar from './components/Navbar';
// import Hero from './components/HeroCollection';
import ThemeSwitcher from './assets/ThemeSwitcher';
import Footer from './components/Footer';




function App() {
  const paragraphs = [
    "Typing is an essential skill for programmers. Being able to type quickly and accurately can save time and improve productivity. With practice, anyone can improve their typing speed."
  ];

  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    const random = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    setTargetText(random);
  }, []);


  useEffect(() => {
    if (isStarted && timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!isFinished && (timeLeft === 0 || (userInput && userInput.trim().length === targetText.trim().length))) {
      setIsFinished(true);
    }
  }, [isStarted, timeLeft, isFinished]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isStarted) setIsStarted(true);
    if (!isFinished) { 
      setUserInput(value);
      if (value.trim().length === targetText.trim().length) {
        setIsFinished(true);
      }
    };
  };

  const getWPM = () => {
    const wordsTyped = userInput.trim().split(/\s+/).length;
    const timeUsed = (60 - timeLeft) / 60;
    return Math.round(wordsTyped / timeUsed);
  };

  const getAccuracy = () => {
    let correct = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === targetText[i]) correct++;
    }
    return userInput.length === 0
      ? 0
      : Math.round((correct / userInput.length) * 100);
  };

  const renderHighlightedText = () => {
    return targetText.split("").map((char, index) => {
      let style = "";
      if (index < userInput.length) {
        style = userInput[index] === char ? "text-success" : "text-error bg-error/10 rounded";
      }
      return (
        <span key={index} className={`transition-colors ${style}`}>
          {char}
        </span>
      );
    });
  };


  return(
    <div className='flex flex-col w-screen min-h-screen justify-between items-center relative'>
      <NavBar />
      
      <main>
      <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-primary">Typing Test</h1>

      <div className="mb-4 flex justify-between items-center">
        <div className={`badge text-lg ${timeLeft <= 10 ? "badge-error text-base-200" : "badge-success badge-outline"}`}>
          Time Left: {timeLeft}s
        </div>
        {isFinished && (
          <div className="text-md font-semibold space-x-4">
            <span className="badge badge-success">WPM: {getWPM()}</span>
            <span className="badge badge-info">Accuracy: {getAccuracy()}%</span>
          </div>
        )}
      </div>

      <div className="mockup-code whitespace-pre-wrap mb-4 p-4 text-base font-mono">
        {renderHighlightedText()}
      </div>

      <textarea
        className="textarea textarea-bordered w-full h-40 font-mono text-base"
        placeholder="Start typing here..."
        value={userInput}
        onChange={handleChange}
        disabled={isFinished}
      />

      {isFinished && (
        <div className="mt-4">
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Restart
          </button>
        </div>
      )}
    </div>
      </main>
      <ThemeSwitcher />
      <Footer />

      
    </div>
  );
}

export default App
