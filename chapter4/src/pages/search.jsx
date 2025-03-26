const SearchPage = () => {
  <html>
    <body>
      <h1>Whitelabel Error Page</h1>
      <p>
        This application has no explicit mapping for /error, so you are seeing
        this as a fallback.
      </p>
      <div id="created">Tue Mar 25 17:20:32 KST 2025</div>
      <div>There was an unexpected error (type=Bad Request, status=400).</div>
      <div>
        JSON parse error: Illegal unquoted character ((CTRL-CHAR, code 9)): has
        to be escaped using backslash to be included in string value; nested
        exception is com.fasterxml.jackson.databind.JsonMappingException:
        Illegal unquoted character ((CTRL-CHAR, code 9)): has to be escaped
        using backslash to be included in string value at [Source:
        (PushbackInputStream); line: 1, column: 95] (through reference chain:
        com.humuson.tms.integration.restapi.domain.request.RequestAutoListDto[&quot;targetList&quot;]-&gt;java.util.ArrayList[0]-&gt;com.humuson.tms.integration.core.domain.AutoSendQue[&quot;toPhone&quot;])
      </div>
    </body>
  </html>;
  return <h1>검색 페이지</h1>;
};
export default SearchPage;
