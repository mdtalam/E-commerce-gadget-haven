const Footer = () => {
  return (
    <div className="text-black-content p-10 bg-base-200 mt-32">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Gadget Heaven</h1>
        <p className="text-md lg:text-lg">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <footer className="footer flex flex-col md:flex-row lg:flex-row lg:justify-around text-black-content lg:p-10 bg-base-200">
        <nav>
          <h6 className="footer-title text-lg text-black">Services</h6>
          <a className="link link-hover text-[16px]">Product Support</a>
          <a className="link link-hover text-[16px]">Order Tracking</a>
          <a className="link link-hover text-[16px]">Shipping & Delivery</a>
          <a className="link link-hover text-[16px]">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg text-black">Company</h6>
          <a className="link link-hover text-[16px]">About us</a>
          <a className="link link-hover text-[16px]">Careers</a>
          <a className="link link-hover text-[16px]">Contact</a> 
        </nav>
        <nav>
          <h6 className="footer-title text-lg text-black">Legal</h6>
          <a className="link link-hover text-[16px]">Terms of Service</a>
          <a className="link link-hover text-[16px]">Privacy policy</a>
          <a className="link link-hover text-[16px]">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
