export interface ContactInfo {
  label: string;
  value: string;
  type: 'email' | 'location';
}

export const contactInfo: ContactInfo[] = [
  { label: 'Email', value: 'eileendevc@gmail.com', type: 'email' },
  { label: 'Location', value: 'Maracaibo, Venezuela', type: 'location' }
];

export interface FormField {
  name: 'name' | 'email' | 'message';
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
}

export const formFields: FormField[] = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project' }
];
