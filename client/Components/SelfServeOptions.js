
const SelfServeOptions = ({ handleFormChange }) => {

  return (
    <div className="self-serve-wrapper">
      <div className="self-serve-cta">
        <h3>Interested in this building?</h3>
        <p>Speak with a workspace expert.</p>
        <button onClick={() => {  handleFormChange('get-in-touch') }}>Get in touch</button>
      </div>
      <div className="book-tour">
        <p>Visit this building in person following our new safety measures.</p>
        <button onClick={() => {  handleFormChange('book-tour') }}>Book a tour</button>
      </div>
    </div>
  )
}

export default SelfServeOptions;