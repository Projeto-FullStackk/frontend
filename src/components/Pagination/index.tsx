import { useRouter } from "next/router";
import ButtonPagination from "./ButtonPagination";

interface iPaginationProps {
  data: {
    page: number
    limitPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

const Pagination = ({ data }: iPaginationProps) => {
  const router = useRouter();
  const {
    hasNextPage,
    hasPreviousPage,
    page,
    limitPage
  } = data;

  const handlePage = (position: number) => () => {
    const newQuery = {
      ...router.query,
      page: page + position,
    }

    router.push(
      {
        pathname: "/",
        query: newQuery,
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 py-6">
      {
        hasPreviousPage && (
          <ButtonPagination
            type="previous"
            onClick={handlePage(-1)}
          />
        )
      }

      <div className=" font-bold text-gray-2/25">
        <span className="text-gray-3">{page}</span> de {limitPage}
      </div>

      {
        hasNextPage && (
          <ButtonPagination
            type="next"
            onClick={handlePage(1)}
          />
        )
      }
    </div>
  )
}

export default Pagination;
