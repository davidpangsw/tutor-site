import React, { useContext, useState } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';
import { ContactContext } from '../ContactContext';
import { FaWhatsapp } from 'react-icons/fa';

const TutoringRequestForm = (props: any) => {
  const {contacts} = useContext(ContactContext)!;
  const {phone, whatsapp, email} = contacts;
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    time: '',
    location: '',
    subjects: '',
    others: '',
  });
  const [copySuccess, setCopySuccess] = useState('');

  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied to clipboard!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    generateMessage(newFormData);
  };

  const generateMessage = (formData: any) => {
    const message = `Hello tutor, I would like to know more about the tutoring service. Here are the details.\n\nStudent Name: ${formData.studentName}\nGrade: ${formData.grade}\nTime: ${formData.time}\nLocation: ${formData.location}\nSubjects: ${formData.subjects}`;
    setMessage(message);
  };
  const sendMessageToWhatsApp = () => {
    const url = `https://wa.me/${whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    console.log(url);
    window.open(url);
  };

  return (
      <Form>
        <Form.Control
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="mb-3"
        />

        <Form.Control
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="mb-3"
        />

        <Form.Control
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time"
          className="mb-3"
        />

        <Form.Control
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="mb-3"
        />

        <Form.Control
          type="text"
          name="subjects"
          value={formData.subjects}
          onChange={handleChange}
          placeholder="Subjects"
          className="mb-3"
        />

        <Form.Control
          as="textarea"
          name="others"
          value={formData.others}
          rows={10}
          placeholder="Anything you would like to mention"
          onChange={handleChange}
          className="mb-3"
        />

        <Form.Group className="mt-3">
          <Form.Control 
            as="textarea" 
            name="message"
            value={message} 
            rows={10}
            placeholder="Fill in the fields above"
            readOnly={true}
            />
          <div className='d-flex justify-content-between'>
            <Button variant="secondary" onClick={() => copyToClipboard(message)} className="mt-3">Copy to Clipboard</Button>
            <Button variant="success" onClick={sendMessageToWhatsApp} className="mt-3">
              <FaWhatsapp/>
            </Button>
            {copySuccess && <p className="text-success mt-2">{copySuccess}</p>}
          </div>
        </Form.Group>
      </Form>
  );
}

export default TutoringRequestForm;
