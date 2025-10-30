const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">CraiTTer</h3>
            <p className="text-secondary-foreground/80">Table Tennis Club • Craiter</p>
          </div>
          <div className="text-center md:text-right text-secondary-foreground/80">
            <p>&copy; {new Date().getFullYear()} CraiTTer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
