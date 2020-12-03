import React, { useState } from "react";
import { Button } from "strapi-helper-plugin";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import { fetchEntries } from "../../utils/contentApis";
import { HFlex, ModelItem } from "./ui-components";
import JsonDataDisplay from "../../components/JsonDataDisplay";

const ExportModel = ({ model }) => {
  const [fetching, setFetching] = useState(false);
  const [content, setContent] = useState(null);
  const fetchModelData = () => {
    setFetching(true);
    fetchEntries(model.apiID, model.schema.kind)
      .then((data) => {
        setContent(data);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  const downloadCSV = () => {
    const current = new Date();

    const csv = Papa.unparse(content, {
      quotes: true,
      quoteChar: '"',
      escapeChar: '"',
      delimiter: ";",
      header: true,
      newline: "\r\n",
    });

    const file = new Blob(["\uFEFF" + csv], {
      type: "text/plain;charset=utf-8;",
    });

    saveAs(file, `${model.apiID}-${current.getTime()}.csv`, {
      type: "text/plain;charset=utf-8",
    });
  };

  const downloadJson = () => {
    const current = new Date();
    const file = new File(
      [JSON.stringify(content)],
      `${model.apiID}-${current.getTime()}.json`,
      { type: "application/json;charset=utf-8" }
    );
    saveAs(file);
  };

  return (
    <ModelItem>
      <HFlex>
        <span className="title">{model.schema.name}</span>
        <div>
          <Button
            disabled={fetching}
            loader={fetching}
            onClick={fetchModelData}
            secondaryHotline
          >
            {fetching ? "Fetching" : "Fetch"}
          </Button>
          <Button
            disabled={!content}
            onClick={downloadJson}
            kind={content ? "secondaryHotline" : "secondary"}
          >
            Download Json
          </Button>
          <Button
            disabled={!content}
            onClick={downloadCSV}
            kind={content ? "secondaryHotline" : "secondary"}
          >
            Download CSV
          </Button>
        </div>
      </HFlex>
      {content && <JsonDataDisplay data={content} />}
    </ModelItem>
  );
};

export default ExportModel;
