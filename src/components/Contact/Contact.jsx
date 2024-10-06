const Contact = ({ name, number }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
