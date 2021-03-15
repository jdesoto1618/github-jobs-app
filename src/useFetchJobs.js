// hook for getting all the different yobs from Github
export default function useFetchJobs(params, page) {
  return {
    jobs: [],
    loading: false,
    error: false
  }
}
