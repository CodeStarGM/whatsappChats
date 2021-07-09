import React from "react";
import ChatData from "./ChatData";
const Chats = () => {
  return (
    <>
      <header>
        <div className="bg-wa-top flex h-8"></div>
        <div className="bg-wa-dark text-white">
          <div className="flex justify-between px-4 pt-2">
            <h1 className="text-2xl">WhatsApp</h1>
            <div className="py-2">
              <i class="material-icons px-3">search</i>
              <i class="material-icons px-3">chat</i>
              <i class="material-icons pl-3">more_vert</i>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-gray-400 w-1/3 text-center p-4">CALLS</h2>
            <h2 className=" w-1/3 text-center p-4 border-b-2 border-white">
              CHATS
            </h2>
            <h2 className="text-gray-400 w-1/3 text-center p-4">CONTACTS</h2>
          </div>
        </div>
      </header>

      <section className="m-2 flex">
        <div className="w-2/12 py-2">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <article className="w-10/12 py-2 border-b-2 border-gray-200">
          <div className="flex justify-between">
            <h2 className="font-semibold">Ghous Muhammad</h2>
            <p className="pop-green">4:01</p>
          </div>
          <div className="flex justify-between">
            <p className="msg">I'm Offering Free Domain & Hosting</p>
            <p className="circle text-white rounded-full h-5 w-5 text-center text-sm">
              4
            </p>
          </div>
        </article>
      </section>
      <section className="m-2 flex">
        <div className="w-2/12 py-2">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80 "
            className="w-14 h-14 rounded-full"
          />
        </div>
        <article className="w-10/12 py-2 border-b-2 border-gray-200">
          <div className="flex justify-between">
            <h2 className="font-semibold">Sarah Mendez</h2>
            <p className="pop-green">11:45 AM</p>
          </div>
          <div className="flex justify-between">
            <p className="msg">I want a cool website</p>
            <p className="circle text-white rounded-full h-5 w-5 text-center text-sm">
              4
            </p>
          </div>
        </article>
      </section>
      {ChatData.map((val, key) => {
        return (
          <section key={key} className="m-2 flex">
            <div className="w-2/12 py-2">
              <img src={val.image} className="w-14 h-14 rounded-full" />
            </div>
            <article className="w-10/12 py-2 border-b-2 border-gray-200">
              <div className="flex justify-between">
                <h2 className="font-semibold">{val.name}</h2>
                <p className="pop-green">{val.time}</p>
              </div>
              <div className="flex justify-between">
                <p className="msg">{val.message}</p>
              </div>
            </article>
          </section>
        );
      })}
    </>
  );
};

export default Chats;
