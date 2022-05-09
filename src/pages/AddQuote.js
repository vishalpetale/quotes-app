import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";
import { useEffect } from "react";

function AddQuote() {
  const { sendRequest, status, error } = useHttp(addQuote);
  const navigate = useNavigate();

  const handleAddQuote = (quote) => {
    sendRequest(quote);
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      navigate("/quotes");
    }
  }, [status, navigate, error]);

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={handleAddQuote} />
  );
}
export default AddQuote;
