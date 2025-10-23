const Footer = () => {
  return (
    <footer className="w-full text-gray-300 items-center py-4 mt-10">
      <div className="container mx-auto sm:flex-row  items-center px-4">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} All rights reserved. Developed by Eden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
