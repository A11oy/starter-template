import { ResponseWriter } from '@edgio/core'
import { HTTP_HEADERS } from '@edgio/core/constants'

export default (response: ResponseWriter, pattern: RegExp): void => {
  const { updateResponseHeader, updateUpstreamResponseHeader } = response
  updateResponseHeader(HTTP_HEADERS.location, pattern, '/')
  updateUpstreamResponseHeader(HTTP_HEADERS.location, pattern, '/')
}
