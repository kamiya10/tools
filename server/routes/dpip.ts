export default defineEventHandler(async  (event) => {
  await sendRedirect(event, "https://github.com/exptechtw/dpip");
})