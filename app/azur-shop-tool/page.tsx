import ALShop from "@/components/other/al_shop"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <ALShop />
        </div>
      </section>
    </>
  )
}
