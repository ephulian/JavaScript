try {                                           // try to run this => {}
    throw new Error                             // throw error
    console.log('works');                       // code
} catch (error) {                               // runs if try doesn't
    console.log('broke');
} finally {                                     // always runs despite try or catch
    console.log('always works');
}