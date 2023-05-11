import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

function Layouts({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
