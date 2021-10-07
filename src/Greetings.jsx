const Greetings = (props) => {
  console.log(props);
  return (
    <div>
      <h3>
        {props.lang === 'fr' ? 'Bonjour' : ' Hallo'}, {props.children}
      </h3>
    </div>
  );
};

export default Greetings;
