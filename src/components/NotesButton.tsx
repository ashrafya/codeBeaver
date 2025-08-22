import { Link } from 'react-router-dom';

interface NotesButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const NotesButton: React.FC<NotesButtonProps> = ({ onClick, children }) => (
  <Link
    key="courses"
    to="courses"
    className="px-6 py-2 bg-[#EBAD25] hover:bg-[#D99A22] text-black font-semibold rounded-xl shadow transition-colors duration-200 inline-block text-center"
    onClick={onClick}
  >
    {children ?? 'Courses'}
  </Link>
);

export default NotesButton;
