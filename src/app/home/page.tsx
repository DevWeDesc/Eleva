"use client";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/Card";
import { Separator } from "@/components/ui/separator";
import { dataCard } from "../../../data/data";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  console.log(selected);
  return (
    <div>
      <Header />
      <div className="border-t">
        <div className="grid lg:grid-cols-5 ">
          <Sidebar
            className="hidden lg:block"
            selected={selected}
            setSelected={(ev: string) => setSelected(ev)}
            setSelectedMaterial={(ev: string) => setSelectedMaterial(ev)}
          />
          <div className="w-full lg:border-lcol-span-3 lg:col-span-4">
            <div className="h-full space-y-1 px-4 py-6 lg:px-8">
              <div>
                <h2 className="text-3xl lg:text-2xl font-semibold tracking-tight">
                  Produtos em Alta
                </h2>
                <p className="text-md lg:text-sm text-muted-foreground">
                  Produtos em Alta
                </p>
              </div>
              <Separator
                style={{ marginTop: "16px", marginBottom: "16px" }}
                className=" bg-zinc-200"
              />
              <div className="flex">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {selected === "" ? (
                    <>
                      {" "}
                      {dataCard.map((data, index) => (
                        <Card
                          category={data.category}
                          material={data.material}
                          key={index}
                          model={data.model}
                          title={data.title}
                          url={data.url}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {selectedMaterial === "" ? (
                        <>
                          {" "}
                          {dataCard
                            .filter((data) => data.category === selected)
                            .map((data, index) => (
                              <Card
                                onClick={() => setSelected(data.category)}
                                category={data.category}
                                material={data.material}
                                key={index}
                                model={data.model}
                                title={data.title}
                                url={data.url}
                              />
                            ))}
                        </>
                      ) : (
                        <>
                          {" "}
                          {dataCard
                            .filter((data) => data.category === selected)
                            .filter(
                              (data) => data.material === selectedMaterial
                            )
                            .map((data, index) => (
                              <Card
                                onClick={() => setSelected(data.category)}
                                category={data.category}
                                material={data.material}
                                key={index}
                                model={data.model}
                                title={data.title}
                                url={data.url}
                              />
                            ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <Footer />
    </div>
  );
}
