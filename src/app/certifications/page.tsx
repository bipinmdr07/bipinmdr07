import { CERTIFICATIONS } from '@/utils/data';
import PDFPreview from '../components/PDFPreview';

export default function Certifications() {
  return (
    <section id='certifications' className='py-20 text-white'>
      <div className='container mx-auto px-4'>
        <h3 className='my-12 text-center text-4xl font-bold'>
          Awards and <span>Certifications</span>
        </h3>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {CERTIFICATIONS.map((cert, index) => (
            <PDFPreview file={cert.file} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
