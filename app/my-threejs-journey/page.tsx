import MTJ3Basic from "@/components/other/mythreejsjouney/MTJ3Basic"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2"></div>
        {true && <MTJ3Basic />}
      </section>
    </>
  )
}
