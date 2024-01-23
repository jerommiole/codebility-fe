const Url = process.env.NEXT_PUBLIC_BASE_API
  ? `${process.env.NEXT_PUBLIC_BASE_API}/`
  : "https://codebility-be.onrender.com/api/v1/production/"

export const API = {
  CODEVS: `${Url}users`,
  AUTH_GOOGLE_CODEVS: `${Url}user`,
}
