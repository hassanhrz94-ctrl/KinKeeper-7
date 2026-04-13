import React from 'react';

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ThreadsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 192 192" fill="currentColor">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376C123.553 160.44 110.424 165.3 96 165.3c-16.855 0-30.368-5.569-40.16-16.552-9.16-10.272-13.894-25.115-14.086-44.126.192-19.01 4.926-33.853 14.087-44.125C65.631 49.569 79.144 44 96 44h.358c16.621.11 29.743 5.61 38.989 16.343 4.636 5.428 8.093 12.248 10.306 20.307l14.811-3.965c-2.782-10.26-7.254-19.084-13.39-26.278C133.581 36.567 116.908 29.133 96.358 29H96c-20.956 0-38.609 7.223-51.08 20.893C33.498 62.258 27.478 80.402 27.25 96.097v.006c.228 15.694 6.248 33.839 17.67 46.204C57.391 156.777 75.044 164 96 164h.359c16.621-.11 29.743-5.61 38.989-16.343 4.636-5.428 8.093-12.248 10.306-20.307l-14.811-3.965c-2.518 9.557-6.671 17.106-12.274 22.419-7.036 6.697-16.603 10.174-27.568 10.196h-.001z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1E3D30] text-white w-full">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
        {/* Brand Name */}
        <h2 className="text-4xl font-bold tracking-tight text-white">
          KeenKeeper
        </h2>

        {/* Tagline */}
        <p className="text-[#94A89E] text-sm max-w-md leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <span className="text-[#94A89E] text-sm font-medium">Social Links</span>
          <div className="flex items-center gap-3">
            {/* Threads */}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#3A5C4E] flex items-center justify-center text-white hover:bg-[#2A5040] transition-colors duration-200"
              aria-label="Threads"
            >
              <ThreadsIcon />
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#3A5C4E] flex items-center justify-center text-white hover:bg-[#2A5040] transition-colors duration-200"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#3A5C4E] flex items-center justify-center text-white hover:bg-[#2A5040] transition-colors duration-200"
              aria-label="X (Twitter)"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2D5040] mx-6" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#94A89E] text-xs">
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;