import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../constants/content';

export function CustomizationForm({ prefilledType = '' }) {
  const { form } = siteContent.customFurniture;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    furnitureType: prefilledType,
    preferredWood: '',
    sizeRequirements: '',
    budget: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-soft backdrop-blur-sm sm:p-8">
      <h3 className="font-display text-4xl text-espresso">{form.title}</h3>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={form.fields.name}
          className="field"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={form.fields.email}
          className="field"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={form.fields.phone}
          className="field"
          required
        />
        <input
          name="furnitureType"
          value={formData.furnitureType}
          onChange={handleChange}
          placeholder={form.fields.furnitureType}
          className="field"
        />
        <input
          name="preferredWood"
          value={formData.preferredWood}
          onChange={handleChange}
          placeholder={form.fields.preferredWood}
          className="field"
        />
        <input
          name="sizeRequirements"
          value={formData.sizeRequirements}
          onChange={handleChange}
          placeholder={form.fields.sizeRequirements}
          className="field"
        />
        <input
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder={form.fields.budget}
          className="field sm:col-span-2"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={form.fields.message}
          className="field min-h-[180px] resize-none sm:col-span-2"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <motion.button
          type="submit"
          whileHover={{ y: -4 }}
          className="rounded-full bg-espresso px-6 py-4 text-sm font-semibold text-ivory"
        >
          {siteContent.buttons.sendInquiry}
        </motion.button>
        {submitted ? <p className="text-sm text-terracotta">{form.success}</p> : null}
      </div>
    </form>
  );
}
