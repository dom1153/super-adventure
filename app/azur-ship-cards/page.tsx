import AzurApiTest from "@/components/other/azurapi-test"

// TODO: consider lazy imports
//       https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <AzurApiTest />
    </section>
  )
}
