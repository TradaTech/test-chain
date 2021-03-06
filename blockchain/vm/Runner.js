module.exports = class {
    lint(src) {
        return src;
    }

    compile(src) {
        return src;
    }

    patch(compiledSrc) {
        return compiledSrc;
    }

    run(compiledSrc, ...args) {
        const patchedSrc = this.patch(compiledSrc);
        return this.doRun(patchedSrc, ...args);
    }

    doRun(patchedSrc, ...args) {
        throw new Error("Not implemented");
    }

    verify(src) {
        return this.lint(src);
    }
}