"use client";
import { useState } from "react";
import FormInput from "../../../components/ui/FormInput";
import AnimatedButton from "../../../components/ui/Button";
import RoundRectGradient from "../../../components/ui/RoundRectGradient";
import { ArrowLeftLongIcon, CancelIcon, Ellipse, ImageIconWhite, InfoYellowIcon, UploadIcon } from "../../../assets/icons";
import SelectDropdown from "../../../components/ui/SelectDropdown";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const MAX_FILE_SIZE_MB = 20;

export default function ImageUploadform() {
  const router = useRouter();

  const { handleSubmit, register } = useForm();
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string>("");

  const goBack = () => {
    router.back();
  };

  const RemoveSelectedImages = (file: File) => {
    setFiles(files => files.filter((item) => item !== file));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", { ...data, files, tags });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const classn = `flex flex-col items-center gap-3 bg-[var(--secondary)] relative transition-all p-8 rounded-2xl text-center text-white`


  return (
    <div className="flex justify-center items-start relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
        <Ellipse />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between pt-5 pb-4 px-20 border-b border-[#222222] border-[1px]">
          <div onClick={goBack} className="cursor-pointer">
            <RoundRectGradient>
              <ArrowLeftLongIcon />
            </RoundRectGradient>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full w-full">
          <div className=" ">
            <div className="text-center pb-6 p-10 max-w-[500px] flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2 text-white">Upload Event <span className="text-[#721D89]">Media</span></h2>
              <p className="text-[var(--grey2)] text-sm ">Share your memories from the event. All media will be stored on decentralized networks for permanent access.</p>
            </div>

            <div
              className="relative p-[2px] mb-14 rounded-2xl bg-radial from-[#9309B7] to-[#3F024F]/6 group w-full shadow-lg hover:shadow-xl transition-shadow" style={{ '--tw-shadow-color': '#2A01348C' } as React.CSSProperties}
            >
              <div className={classn}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
                  <div className="text-left flex flex-col gap-2 w-full">
                    <label className="text-[12px] font-semibold">Select Event</label>
                    <SelectDropdown />
                  </div>

                  {/* File Upload */}
                  <div
                    className="flex flex-col items-center justify-center gap-4 text-center border border-[var(--grey)]/30 border-dashed bg-[#212121]/85 text-[var(--grey2)]/20 w-full h-40 px-6 py-10 cursor-pointer rounded-lg"
                  >
                    <div className="w-3/4">
                      <p className="text-[18px] text-[var(--grey2)]">Drag and drop images to upload</p>
                      <p className="text-[8px] text-[#BDBDBD]">Supported files are JPEG, PNG, SVG and not more than {MAX_FILE_SIZE_MB}MB</p>
                    </div>
                    <AnimatedButton className="cursor-pointer shadow-black/75 shadow-xl hover:shadow-lg transition-shadow">
                      <label htmlFor="browse" className='kanit-medium text-primary font-bold hover:underline bg-secondary px-5 py-2 text-center w-fit rounded-full'>Select Files</label>
                    </AnimatedButton>
                    <input
                      type="file"
                      onChange={handleChange}
                      accept=".jpeg, .png, .jpg, .pdf"
                      multiple
                      hidden
                      id="browse" />
                  </div>

                  <p className="text-[12px] text-[#BDBDBD] text-left font-semibold mb-1">Selected file(s)</p>
                  {files.length > 0 && (
                    <ul className="text-sm flex flex-col gap-1">
                      {files.map((file) => (
                        <FormInput>
                          <li key={file.name} className="bg-[var(--secondary)]/85 w-full p-1 px-2 flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center justify-baseline gap-1">
                              <div className="">
                                <ImageIconWhite />
                              </div>
                              <div className="flex flex-col text-left items-start">
                                <p className="text-[10px]">{file.name}</p>
                                <p className="text-[6px] text-[#BDBDBD]">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <div className="cursor-pointer" onClick={() => RemoveSelectedImages(file)}>
                              <CancelIcon />
                            </div>
                          </li>
                        </FormInput>
                      ))}
                    </ul>

                  )}

                  {/* Tag Input */}
                  <div className="flex flex-col items-start">
                    <label className="text-xs text-[#BDBDBD]  font-semibold mb-1 text-left">Add Tags (helps with AI search)</label>
                    <FormInput>
                      <input
                        {...register("tags")}
                        type="text"
                        placeholder="E.g., Tech meet-ups, Networking, Training"
                        className="w-full p-2 rounded-md bg-[var(--secondary)]/85 text-[var(--grey2)] focus:outline-none focus:ring-1 focus:ring-[var(--secondary2)]"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                      />
                    </FormInput>
                  </div>

                  <AnimatedButton icon={<UploadIcon />} className="shadow-black/75 shadow-xl hover:shadow-lg transition-shadow w-full">
                    <button type="submit" className="cursor-pointer">
                      <span>Upload Media</span>
                      <span className="">{` (${files.length})`}</span>
                    </button>
                  </AnimatedButton>

                  <p className="text-[#BDBDBD] text-[10px]">Upload at least 3 images, engage your audience through likes, and stand a chance to win exclusive NFTs</p>

                  <div className="flex flex-row items-center justify-center gap-1">
                    <InfoYellowIcon />
                    <p className="text-[#BDBDBD] text-[14px]">Files will be uploaded to decentralized storage</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
