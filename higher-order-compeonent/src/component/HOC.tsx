import React, { useEffect, useState } from "react";
import { typeOfData } from "../modal";

const HOC = (WrappedComponent: React.ComponentType, entity: string) => {
  const EnhancedComponent = (props: any) => {
    const [data, setData] = useState<typeOfData>({ newData: [], term: "" });

    const fetchData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
      const json = await res.json();
      setData({ newData: json.slice(0, 10), term: "" });
    };

    useEffect(() => {
      fetchData();
    }, []);

    let filteredData = data.term
      ? data.newData.filter((d) => {
          if ("company" in d) {
            const { name } = d;
            return name.indexOf(data.term) !== -1;
          } else {
            const { title } = d;
            return title.indexOf(data.term) !== -1;
          }
        })
      : data.newData;

    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={data?.term}
          onChange={(e) => setData({ ...data, term: e.target.value })}
        />

        {data.newData.length > 0 ? (
          filteredData.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{"company" in user ? user.name : user.title}</strong>
                </p>
              </div>
            );
          })
        ) : (
          <h2>No available Todo</h2>
        )}
        <WrappedComponent data={filteredData} {...props} />
      </div>
    );
  };
  return EnhancedComponent;
};

export default HOC;
