// import { useState,useEffect } from "react";
// import { FaSquareTwitter } from "react-icons/fa6";
// function Quotes() {
//     const [quote,setQuote]=useState(null);
//     const [author,setAuthor]=useState(null);
//     useEffect(() => {
//         fetchQuote();
//       }, []);
//   const fetchQuote = () => {
//     fetch("https://dummyjson.com/quotes/random")
//     .then((res) => res.json())
//     .then((data) => {
//       setQuote(data.quote);
//       setAuthor(data.author);
//     })
//     .catch((error) => console.error('Error fetching the quote:', error));
  
//   };
//   const newQuote = () => {

//     fetchQuote();
//   };
  
//   return (
//     <>
//       <div id="qoute-box" style={{width:"750px",height:"350px",backgroundColor:"white",padding:"10px",fontFamily:"sans-serif",fontStyle:"italic",borderRadius:"20px" }}>
//         <div id="text">
//         <h1 style={{color:"black"}} >
//           {quote}
//         </h1>
//         </div>
//         <h4 id="author">-{author}</h4>
//         <div style={{ display: "flex" }}>
//           <a
//             id="tweet-qoute"
//             target="_blank"
//             style={{ height: "35px", width: "35px", marginLeft: "50px" }}
//             href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " -" + author)}`}
//           >
//             <FaSquareTwitter size={35} />
//           </a>
//           <button id="new-quote" onClick={() => newQuote()}>
//             New Qoute
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Quotes;


// Quotes.jsx
import React, { useState, useEffect } from "react";
import { FaSquareTwitter } from "react-icons/fa6";

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error('Error fetching the quote:', error));
  };

  const tweetQuote = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`);
  };

  return (
    <>
      <div>
        <h1 id="text" style={{color:"black"}}>{quote}</h1>
        <h4 id="author" style={{color:"black"}}>-{author}</h4>
      </div>
      <div style={{ display: "flex" }}>
        <a
          id="tweet-quote"
          target="_blank"
          style={{ height: "35px", width: "35px", marginLeft: "50px" }}
        //   onClick={tweetQuote}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`}
        >
          <FaSquareTwitter size={35} />
        </a>
        <button id="new-quote" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </>
  );
}

export default Quotes;
