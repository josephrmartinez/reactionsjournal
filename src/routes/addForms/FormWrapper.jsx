export default function FormWrapper({ title, children }) {
    return (
        <>
            <div className=" text-xl text-left self-center leading-5 font-mukta font-bold">{title}</div>
            <div className="flex flex-col items-center w-full">{children}</div>
        </>
    )
}
