import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SanitizedContact } from '../../interfaces/sanitized-config';

const ContactCard = ({
  contact,
  loading,
}: {
  contact: SanitizedContact;
  loading: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all fields.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: '' });

    try {
      if (!contact.emailJS) {
        setStatus({
          type: 'error',
          message: 'Email service is not configured.',
        });
        return;
      }

      const result = await emailjs.send(
        contact.emailJS.serviceId,
        contact.emailJS.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: contact.email,
        },
        contact.emailJS.publicKey,
      );

      if (result.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">Contact</span>
          </h5>
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="What can i call you?"
                className="input input-bordered w-full bg-base-200 focus:outline-primary border-none"
                value={formData.name}
                onChange={handleChange}
                disabled={loading || isSending}
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Where can i reach you(email)?"
                className="input input-bordered w-full bg-base-200 focus:outline-primary border-none"
                value={formData.email}
                onChange={handleChange}
                disabled={loading || isSending}
              />
            </div>
          </div>
          <div className="form-control mb-4">
            <textarea
              name="message"
              placeholder="How can i help you?"
              className="textarea textarea-bordered h-24 bg-base-200 focus:outline-primary border-none"
              value={formData.message}
              onChange={handleChange}
              disabled={loading || isSending}
            ></textarea>
          </div>
          <div className="flex flex-col items-end gap-3">
            {status.type && (
              <div
                className={`text-sm ${
                  status.type === 'success' ? 'text-success' : 'text-error'
                }`}
              >
                {status.message}
              </div>
            )}
            <button
              type="submit"
              className={`btn btn-primary px-8 font-bold ${
                isSending ? 'loading' : ''
              }`}
              disabled={loading || isSending}
            >
              {isSending ? 'SENDING...' : 'SEND IT!'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
