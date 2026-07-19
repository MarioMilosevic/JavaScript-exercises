import { useState, useEffect } from "react";
import { Content, View } from "../types";
import * as viewsApi from "../api/views";

const CustomViews = () => {
  const [views, setViews] = useState<View[]>([]);
  const [selectedView, setSelectedView] = useState<View | null>(null);
  const [currentContent, setCurrentContent] = useState<Content | null>(null);

  useEffect(() => {
    viewsApi.getViews().then((fetchedViews) => {
      setViews(fetchedViews);
      if (fetchedViews.length > 0) {
        setSelectedView(fetchedViews[0]);
        setCurrentContent(fetchedViews[0].content);
      }
    });
  }, []);

  return (
    <div className="w-[500px] mx-auto mt-12 border border-gray-300 bg-white p-5 shadow-md">
      <div className="mt-5">
        <div>
          <select
            value={selectedView ? selectedView.id : ""}
            onChange={(e) => {
              const view = views.find(
                (view) => view.id === parseInt(e.target.value)
              );
              setSelectedView(view || null);
              setCurrentContent(view ? view.content : null);
            }}
            className="flex-1 h-10 rounded border-r-8 border-transparent px-4 text-sm outline outline-neutral-700"
          >
            {views.map((view) => (
              <option key={view.id} value={view.id}>
                {view.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomViews;
