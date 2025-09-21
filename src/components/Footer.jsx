// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black/40 text-gray-300 py-10 text-center">
      <p>&copy; {new Date().getFullYear()} TimetableAI. All rights reserved.</p>
      <div className="mt-4 flex gap-6 justify-center">
        <a href="#" className="hover:text-white">Features</a>
        <a href="#" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Contact</a>
        <a href="#" className="hover:text-white">Resources</a>
      </div>
    </footer>
  );
}
