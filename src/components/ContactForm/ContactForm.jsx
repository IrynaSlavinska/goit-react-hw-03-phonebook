import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="phonebook-form" onSubmit={this.submitHandler}>
        <label className="phonebook-label">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            className="phonebook-input"
            placeholder="Enter name"
          />
        </label>

        <label className="phonebook-label">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
            className="phonebook-input"
            placeholder="Enter tel"
          />
        </label>

        <button type="submit" className="phonebook-add">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
