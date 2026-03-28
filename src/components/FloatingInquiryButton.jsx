import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingInquiryButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed bottom-6 right-4 z-40 sm:right-6"
    >
      <Link
        to="/custom-furniture"
        className="flex items-center gap-3 rounded-full bg-terracotta px-5 py-4 text-sm font-semibold text-white shadow-glow"
      >
        <MessageCircleMore className="h-5 w-5" />
        Custom Order Inquiry
      </Link>
    </motion.div>
  );
}
