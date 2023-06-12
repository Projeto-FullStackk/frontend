import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "@/contexts/appContext";

interface modalProps {
  children: React.ReactNode;
  title: string;
}

export default function Modal({ children, title }: modalProps) {
  const { handleCloseModal, open } = useAppContext();

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleCloseModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-6">
                  <div className="sm:flex sm:flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {title ? title : "Título do modal"}
                      </Dialog.Title>
                      <div className="mt-2">
                        <XMarkIcon
                          className="w-5 h-5 text-gray-500 cursor-pointer"
                          onClick={handleCloseModal}
                        />
                      </div>
                    </div>
                    <div className="mt-3 text-left sm:mt-0 sm:text-left">
                      <Dialog.Description>
                        {children ? (
                          children
                        ) : (
                          <p>
                            Lorem Ipsum é simplesmente uma simulação de texto da
                            indústria tipográfica e de impressos, e vem sendo
                            utilizado desde o século XVI, quando um impressor
                            desconhecido pegou uma bandeja de tipos e os
                            embaralhou para fazer um livro de modelos de tipos.
                            Lorem Ipsum sobreviveu não só a cinco séculos, como
                            também ao salto para a editoração eletrônica,
                            permanecendo essencialmente inalterado. Se
                            popularizou na década de 60, quando a Letraset
                            lançou decalques contendo passagens de Lorem Ipsum,
                            e mais recentemente quando passou a ser integrado a
                            softwares de editoração eletrônica como Aldus
                            PageMaker.
                          </p>
                        )}
                      </Dialog.Description>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
