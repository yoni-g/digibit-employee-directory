export const fetchKlikaMembers = async () => {
    // return Promise()
    let membersExcelUrl = `https://spreadsheets.google.com/feeds/list/16S7PcEvTMd-OkvCwuHbuUbTE2tyhhlJFC4adNFo31Dg/od6/public/values?alt=json`
    return fetch(membersExcelUrl)
            .then(res => res.json())
    // .then(res => {
    //     console.log(res);
    //     return res
    // })
    
}