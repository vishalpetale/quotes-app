import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";

import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const Quote = React.lazy(() => import("./pages/Quote"));
const Comments = React.lazy(() => import("./components/comments/Comments"));
const LoadComment = React.lazy(() =>
  import("./components/comments/LoadComments")
);

function App() {
  const fallbackContent = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  return (
    <Layout>
      <Suspense fallback={fallbackContent}>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />}></Route>
          <Route path="/quotes" element={<AllQuotes />}></Route>
          <Route path="/new-quote" element={<AddQuote />}></Route>
          <Route path="/quote/:quoteID" element={<Quote />}>
            <Route path="comments" element={<Comments />}></Route>
            <Route index element={<LoadComment />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
