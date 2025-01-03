
const Language = ({ language }) => {
    const { image, text } = language;
    return (
      <div className="langContainer">
        <img src={image} alt={text} className="img-fluid" />
        <span>{text}</span>
      </div>
    );
};
  
export default Language;
  